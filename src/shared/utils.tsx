export const padNumber = (num: number, size: number = 3) => {
    let str = num.toString();
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
};

export const fixNames = (name: string) => {
    if (name === 'sceptile') {
        return 'sceptille';
    }
    if (name === 'jirachi') {
        return 'lirachi';
    }
    if (name === 'ninjask') {
        return 'niniask';
    }
    if (name === 'baltoy') {
        return 'baltov';
    }
    if (name === 'claydol') {
        return 'clavdol';
    }
    if (name.includes('deoxys')) {
        return 'deoxys';
    }
    if (name === 'unown') {
        return `${name}-a`;
    }
    if (name === 'spinda') {
        return `${name}-1`;
    }
    if (name === 'castform') {
        return `${name}-normal`;
    }
    if (name === 'burmy') {
        return `${name}-plant`;
    }
    if (name === 'vespiquen') {
        return 'vespiqueen';
    }
    if (name === 'cherrim') {
        return 'cherim-overcast';
    }
    if (name === 'shellos') {
        return 'shellos-east';
    }
    if (name === 'gastrodon') {
        return 'gastrodon-east';
    }
    if (name === 'mime-jr') {
        return 'mimejr';
    }
    if (name === 'lickilicky') {
        return 'lickilicki';
    }
    if (name === 'ho-oh') {
        return 'hooh';
    }
    return name;
};

export const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export function getFormattedDate(date: Date): string {
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
}
