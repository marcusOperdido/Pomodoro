class getToday {
    static today() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
    };

    static shortToday() {
        const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        const today = new Date();
        return days[today.getDay()];
    };
}