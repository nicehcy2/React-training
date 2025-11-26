function parse(qs) {

    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    return chunks
        .map((chunk) => {
            const [key, value] = chunk.split('=');
            return { key, value };
        })
        .reduce((result, item) => {
            result[item.key] = item.value;
            return result;
        }, {});
}

var result = parse('banana=10&apple=20&orange=30');
console.log(result);