export class Post {
    title = '';
    content = '';
    slug = '';
    createdAt = '';
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

    get creationDate() {
        return new Date(this.createdAt).toLocaleDateString().split('T')[0];
    }

    static fromRequest(obj) {
        const self = new Post();
        if (!obj) {
            return self;
        }

        self.title = obj.title;
        self.content = obj.content;
        self.createdAt = obj.created_at;
        self.slug = obj.slug;
        self.image = obj.image;
        self.category = obj.category;

        return self;
    }
}