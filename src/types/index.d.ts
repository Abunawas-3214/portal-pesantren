export interface pesantrenSearhParams {
    search: string,
    page: number,
    gender: {
        putra: boolean,
        putri: boolean,
    },
    program: {
        kitab: boolean,
        tahfidz: boolean,
    },
    tingkat: {
        umum: boolean,
        mahasiswa: boolean,
        slta: boolean,
        sltp: boolean,
    },
    kecamatan: {
        lowokwaru: boolean,
        blimbing: boolean,
        kedungkandang: boolean,
        klojen: boolean,
        sukun: boolean,
    }
}