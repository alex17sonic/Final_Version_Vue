const { createApp } = Vue;

createApp({
  data() {
    return {
      mitarbeiter: [
        { vorname: 'Alexandru', nachname: 'Sonic', abteilung: 'IT', nr: '800581337' },
        { vorname: 'Alex', nachname: 'Müller', abteilung: 'Verkauf', nr: '800656456' },
        { vorname: 'Anna', nachname: 'Schmidt', abteilung: 'Marketing', nr: '800756435' },
        { vorname: 'John', nachname: 'Doe', abteilung: 'IT', nr: '800677865' },
        { vorname: 'Jane', nachname: 'Roe', abteilung: 'HR', nr: '800595454' },
        { vorname: 'Max', nachname: 'Mustermann', abteilung: 'Forschung', nr: '800609898' },
        { vorname: 'Erika', nachname: 'Mustermann', abteilung: 'Entwicklung', nr: '800777688' },
        { vorname: 'Chris', nachname: 'Pine', abteilung: 'Design', nr: '800888554' }
      ],
      currentSort: 'vorname',
      currentSortDir: 'asc'
    };
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
}).mount('#app');
