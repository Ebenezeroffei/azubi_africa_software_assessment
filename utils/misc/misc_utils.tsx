


class MiscUtils {
    static generateInputNameAndId = (
        label: string
    ) => {
        return `${label.trim().replace(' ', '-').toLowerCase()}`;
    }


    static formatToCurrencyUSD = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(amount);
    }


}

export default MiscUtils;