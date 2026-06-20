import { useState, useEffect } from 'react';

export default function UkmApp({ t }) {
  const [products, setProducts] = useState(() => {
    try { const s = localStorage.getItem('ukm_products'); return s ? JSON.parse(s) : []; }
    catch { return []; }
  });
  const [form, setForm] = useState({ name: '', price: '', cost: '', qty: '' });
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState(() => {
    try { const s = localStorage.getItem('ukm_notes'); return s ? JSON.parse(s) : []; }
    catch { return []; }
  });
  const [noteText, setNoteText] = useState('');

  useEffect(() => { localStorage.setItem('ukm_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('ukm_notes', JSON.stringify(notes)); }, [notes]);

  const handleAdd = () => {
    const { name, price, cost, qty } = form;
    if (!name || !price || !cost || !qty) return;
    const item = { name, price: Number(price), cost: Number(cost), qty: Number(qty) };
    if (editId) {
      setProducts(prev => prev.map(p => p.id === editId ? { ...item, id: editId } : p));
      setEditId(null);
    } else {
      setProducts(prev => [...prev, { ...item, id: Date.now() }]);
    }
    setForm({ name: '', price: '', cost: '', qty: '' });
  };

  const handleEdit = (p) => {
    setForm({ name: p.name, price: String(p.price), cost: String(p.cost), qty: String(p.qty) });
    setEditId(p.id);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    if (editId === id) { setEditId(null); setForm({ name: '', price: '', cost: '', qty: '' }); }
  };

  const addNote = () => {
    if (!noteText.trim()) return;
    setNotes(prev => [{ id: Date.now(), text: noteText, date: new Date().toLocaleDateString() }, ...prev]);
    setNoteText('');
  };

  const deleteNote = (id) => setNotes(prev => prev.filter(n => n.id !== id));

  const totalRevenue = products.reduce((s, p) => s + p.price * p.qty, 0);
  const totalCost = products.reduce((s, p) => s + p.cost * p.qty, 0);
  const totalProfit = totalRevenue - totalCost;

  return (
    <div className="ukm-wrap">
      <div className="ukm-col">
        <h3 className="section-title" style={{fontSize:'0.85rem',marginBottom:'12px'}}>{t('ukm_profit_title')}</h3>
        <div className="ukm-form">
          <input placeholder={t('ukm_product_name')} value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
          <input type="number" placeholder={t('ukm_price')} value={form.price} onChange={e => setForm({...form,price:e.target.value})} />
          <input type="number" placeholder={t('ukm_cost')} value={form.cost} onChange={e => setForm({...form,cost:e.target.value})} />
          <input type="number" placeholder={t('ukm_qty')} value={form.qty} onChange={e => setForm({...form,qty:e.target.value})} />
          <button className="action-btn" style={{fontSize:'0.5rem',padding:'8px 16px',width:'100%'}} onClick={handleAdd}>
            <i className={`fas ${editId ? 'fa-edit' : 'fa-plus'}`}></i> {editId ? t('ukm_update') : t('ukm_add')}
          </button>
        </div>
        {products.length === 0 ? (
          <p className="ukm-empty">{t('ukm_no_products')}</p>
        ) : (
          <div className="ukm-list">
            {products.map(p => (
              <div key={p.id} className="ukm-item">
                <div className="ukm-item-info">
                  <strong>{p.name}</strong>
                  <span>Rp{p.price.toLocaleString()} x {p.qty} | Modal: Rp{p.cost.toLocaleString()}</span>
                  <span className="ukm-item-profit">
                    {t('ukm_total_profit')}: <b className={(p.price - p.cost) * p.qty > 0 ? 'profit-plus' : (p.price - p.cost) * p.qty < 0 ? 'profit-minus' : ''}>Rp{((p.price - p.cost) * p.qty).toLocaleString()}</b>
                  </span>
                </div>
                <div className="ukm-item-acts">
                  <button onClick={() => handleEdit(p)}><i className="fas fa-pen"></i></button>
                  <button onClick={() => handleDelete(p.id)}><i className="fas fa-trash"></i></button>
                </div>
              </div>
            ))}
            <div className="ukm-total">
              <span>{t('ukm_total_revenue')}: <b>Rp{totalRevenue.toLocaleString()}</b></span>
              <span>{t('ukm_total_cost')}: <b>Rp{totalCost.toLocaleString()}</b></span>
              <span className={totalProfit >= 0 ? 'profit-plus' : 'profit-minus'}>
                {t('ukm_total_profit')}: <b>Rp{totalProfit.toLocaleString()}</b>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="ukm-col">
        <h3 className="section-title" style={{fontSize:'0.85rem',marginBottom:'12px'}}>{t('ukm_notes_title')}</h3>
        <div className="ukm-notes-form">
          <textarea rows="3" placeholder={t('ukm_notes_placeholder')} value={noteText} onChange={e => setNoteText(e.target.value)} />
          <button className="action-btn" style={{fontSize:'0.5rem',padding:'8px 16px',width:'100%'}} onClick={addNote}>
            <i className="fas fa-save"></i> {t('ukm_notes_save')}
          </button>
        </div>
        {notes.length === 0 ? (
          <p className="ukm-empty">{t('ukm_notes_empty')}</p>
        ) : (
          <div className="ukm-notes-list">
            {notes.map(n => (
              <div key={n.id} className="ukm-note">
                <div className="ukm-note-head">
                  <span className="ukm-note-date">{n.date}</span>
                  <button onClick={() => deleteNote(n.id)}><i className="fas fa-times"></i></button>
                </div>
                <p className="ukm-note-text">{n.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
