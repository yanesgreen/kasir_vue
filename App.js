new Vue({
    el: '#app',
    data: {
        title: 'Aplikasi Kasir',
        namaKasir: '',
        kodeBarang: '',
        hargaBarang: 0,
        jumlahBeli: 0,
        totalHarga: 0,
        tampilkanStruk: false
    },
    methods: {
        buatStruk() {
            this.totalHarga = this.hargaBarang * this.jumlahBeli;
            this.tampilkanStruk = true;
        },

        bersihkanData() {
            this.namaKasir = '';
            this.kodeBarang = '';
            this.hargaBarang = '';
            this.jumlahBeli = '';
            this.totalHarga = '';
            this.tampilkanStruk = false;
        }
    },
    computed: {
        hargaBarangFormatted() {
            let rupiah = '';
            let angkaRev = this.hargaBarang.toString().split('').reverse().join('');
            for (var i = 0; i < angkaRev.length; i++) if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        },

        totalHargaFormatted() {
            let rupiah = '';
            let angkaRev = this.totalHarga.toString().split('').reverse().join('');
            for (var i = 0; i < angkaRev.length; i++) if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }
    }
});
