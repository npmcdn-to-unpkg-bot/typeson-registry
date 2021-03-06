exports.Error = [
    function (x) { return x instanceof Error; },
    function (error) { return {name: error.name, message: error.message}; },
    function (data) {
        var e = new Error (data.message);
        e.name = data.name;
        return e;
    }
];
// See also errors.js that may be registered after having registered this type.
