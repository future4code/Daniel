export class Paper {
    private imageUrl: string;
    private printSize: PrintSizes;
    private printPaperType: PrintPaperTypes;

    constructor(imageUrl: string, size: string, paperType: string) {
        this.imageUrl = imageUrl;
        if (!(size in PrintSizes)) {
            throw new Error('Tamanho do papel invalido')
        }

        if (!(paperType in PrintPaperTypes)) {
            throw new Error('Tipo do papel invalido')
        }
        this.printSize = size as PrintSizes;
        this.printPaperType = paperType as PrintPaperTypes;
    }

    public getSize() {
        return this.printSize;
    }
    public getType() {
        return this.printPaperType;
    }
    public getImageUrl() {
        return this.imageUrl;
    }
    public calculatePrice() {
        let totalPrice;
        switch (this.printSize) {
            case PrintSizes["13x18"]:
                totalPrice = 20;
                break;
            case PrintSizes["21x30"]:
                totalPrice = 27;
                break;
            case PrintSizes["30x30"]:
                totalPrice = 35.40;
                break;
            case PrintSizes["30x42"]:
                totalPrice = 42.30;
                break;
            case PrintSizes["42x60"]:
                totalPrice = 55.60;
                break;
            default:
                totalPrice = 0;
                break;
        }
        return totalPrice;
    }
}

enum PrintSizes {
    "13x18" = "13x18",
    "21x30" = "21x30",
    "30x30" = "30x30",
    "30x42" = "30x42",
    "42x60" = "42x60",
}

enum PrintPaperTypes {
    BRILHANTE = 'BRILHANTE',
    FOSCO = 'FOSCO',
    FIBRA = 'FIBRA',
    RESINADO = 'RESINADO',
    PEROLA = 'PEROLA',
}
