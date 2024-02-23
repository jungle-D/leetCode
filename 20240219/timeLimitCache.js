class TimeLimitCache {
  cache = new Map();

  set(key, value, duration) {
    const keyName = this.cache.get(key);
    if (keyName) clearTimeout(keyName.timer);

    const timer = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timer });
    return Boolean(keyName);
  }

  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count() {
    return this.cache.size();
  }
}
