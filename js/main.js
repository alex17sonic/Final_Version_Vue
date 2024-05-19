new Vue({
    el: '#app',
    data: {
      mitarbeiter: [
        { vorname: 'Alexandru', nachname: 'Sonic', abteilung: 'IT', nr: '001' },
        { vorname: 'Alex', nachname: 'Müller', abteilung: 'Verkauf', nr: '002' },
        { vorname: 'Anna', nachname: 'Schmidt', abteilung: 'Marketing', nr: '003' },
        { vorname: 'John', nachname: 'Doe', abteilung: 'IT', nr: '004' },
        { vorname: 'Jane', nachname: 'Roe', abteilung: 'HR', nr: '005' },
        { vorname: 'Max', nachname: 'Mustermann', abteilung: 'Forschung', nr: '006' },
        { vorname: 'Erika', nachname: 'Mustermann', abteilung: 'Entwicklung', nr: '007' },
        { vorname: 'Chris', nachname: 'Pine', abteilung: 'Design', nr: '008' }
      ],
      currentSort: 'vorname',
      currentSortDir: 'asc'
    },
    computed: {
      sortedMitarbeiter() {
        return this.mitarbeiter.sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
      }
    },
    methods: {
      sort(s) {
        if (s === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
        } else {
          this.currentSortDir = 'asc';
        }
        this.currentSort = s;
      }
    }
  });
  