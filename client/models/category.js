export class Category {
    name = '';
    displayName = '';

    static fromRequest(obj) {
        const self = new Category();
        if (!obj) {
            return self;
        }

        Object.keys(obj).filter(key => key in self).forEach(key => self[key] = obj[key]);

        return self;
    }
}