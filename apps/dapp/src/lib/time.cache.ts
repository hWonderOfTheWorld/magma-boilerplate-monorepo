export class TimeCache<T> {
    private data: T | null = null;
    private dataPromise: Promise<T> | null = null;
    private expiryMs: number;
    private expiresAt: number;
    private getter: () => Promise<T>;

    constructor(getter: () => Promise<T>, expiryMS: number = 30000) {
        this.expiresAt = -1;
        this.expiryMs = expiryMS;
        this.getter = getter;
    }

    set(data: T) {
        this.data = data;
        this.expiresAt = this.expiryMs + Date.now();
        this.dataPromise = null;
    }

    async get(force: boolean = false) {
        if (Date.now() > this.expiresAt || force) {
            if (!this.dataPromise) {
                this.dataPromise = this.getter();
            }

            this.set(await this.dataPromise);
        }

        if (!this.data) {
            throw new Error('unable to get data');
        }

        return(this.data);
    }
}
