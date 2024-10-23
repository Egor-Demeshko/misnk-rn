export default function writable(initialValue = null){
    return Object.seal(
        {
            value: initialValue,
            callbacks: new Set(), 
            subscribe,
            update,
        }
    );

    function subscribe(callback){
        this.callbacks.add(callback);
    }

    function update(fn){
        this.value = fn(this.value);
        this.callbacks.forEach((callback) => callback(this.value));
    }
} 