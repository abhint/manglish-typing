export default function gindic(input, callback) {
    const params = new URLSearchParams({
        text: input,
        itc: "ml-t-i0-und",
        num: 5,
        cp: 0,
        cs: 1,
        ie: "utf-8",
        oe: "utf-8",
    }).toString();

    const url = `https:///inputtools.google.com/request`;

    fetch(url, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((r) => r.json())
        .then((words) => {
            callback(words);
        })
        .catch((error) => console.error("Error fetching data:", error));

}
