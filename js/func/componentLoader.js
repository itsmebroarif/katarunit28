/* componentLoader.js - Load HTML components via fetch */

const ComponentLoader = {
    components: [
        { id: 'home',     file: 'components/home.html' },
        { id: 'about',    file: 'components/about.html' },
        { id: 'gallery',  file: 'components/gallery.html' },
        { id: 'event',    file: 'components/event.html' },
        { id: 'project',  file: 'components/project.html' },
        { id: 'software', file: 'components/software.html' },
        { id: 'team',     file: 'components/team.html' },
        { id: 'contact',  file: 'components/contact.html' },
        { id: 'footer',   file: 'components/footer.html' },
    ],

    async loadAll() {
        const app = document.getElementById('app');
        for (const comp of this.components) {
            try {
                const res = await fetch(comp.file);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const html = await res.text();
                app.insertAdjacentHTML('beforeend', html);
            } catch (err) {
                console.error(`Gagal load ${comp.file}:`, err);
            }
        }
        window.dispatchEvent(new Event('componentsLoaded'));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.loadAll();
});
