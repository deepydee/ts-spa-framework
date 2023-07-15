const wfm = {
    delay(ms: number = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, ms);
        });
    }
}

export { wfm }
