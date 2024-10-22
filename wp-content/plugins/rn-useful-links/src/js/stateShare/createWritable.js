export default function writable(initialValue = null){
    return Object.seal(
        {
            value: initialValue,
            callbacks: new WeakSet(), 
            subsribe,
            update,
        }
    );

    function subsribe(callback){
        this.callbacks.add(callback);
    }

    function update(value){
        if(this.value === value) return;

        this.value = value;
        callbacks.forEach((callback) => callback(value));
    }
} 