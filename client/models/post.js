export class Post {
    title = '';
    content = '';
    slug = '';
    image = {};
    category = {};

    get readTime() {
        // average read time for a human 225 words per minute
        const wpm = 225;
        const words = this.content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wpm);

        return minutes === 1 ? `${minutes} minūte` : `${minutes} minūtes`;
    }

    get imageUrl() {
        return `/content/${this.image.url}`;
    }

    get imageAlt() {
        return this.image.alternativeText;
    }

    get postUrl() {
        return `/${this.category.name}/${this.slug}`;
    }

    static fromRequest(obj) {
        const self = new Post();
        if (!obj) {
            return self;
        }

        Object.keys(obj).filter(key => key in self).forEach(key => self[key] = obj[key]);

        return self;
    }
}