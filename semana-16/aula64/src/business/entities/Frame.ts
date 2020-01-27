export class Frame {
    private frameColor: string;
    private frameType: FrameTypes;
    private frameBorderSize: FrameBorderSizes;

    constructor(color: string, frameType: string, borderSize: string) {
        this.frameColor = color;
        if (!(frameType in FrameTypes)) {
            throw new Error('Tipo de moldura invalida')
        }

        if (!(borderSize in FrameBorderSizes)) {
            throw new Error('Tamanho de borda invalida')
        }
        this.frameType = frameType as FrameTypes;
        this.frameBorderSize = borderSize as FrameBorderSizes;
    }
    public getType(){
        return this.frameType;
    }
    public getBorderSize() {
        return this.frameBorderSize;
    }
    public getColor(){
        return this.frameColor;
    }
    public calculatePrice() {
        let totalPrice;
        
        switch (this.frameType) {
            case FrameTypes.CRUA:
                totalPrice = 15;
                break;
            case FrameTypes.CLASSICA:
                totalPrice = 43;
                break;
            case FrameTypes.LISA:
                totalPrice = 32;
                break;
            case FrameTypes.MADEIRA:
                totalPrice = 60;
                break;
            case FrameTypes.VINTAGE:
                totalPrice = 52.50;
                break;
        }
        return totalPrice;
    }
}

export enum FrameTypes {
    CRUA = 'CRUA',
    LISA = 'LISA',
    CLASSICA = 'CLASSICA',
    VINTAGE = 'VINTAGE',
    MADEIRA = 'MADEIRA',
}

export enum FrameBorderSizes {
    PEQUENA = 'PEQUENA',
    MEDIA = 'MEDIA',
    GRANDE = 'GRANDE',
}
