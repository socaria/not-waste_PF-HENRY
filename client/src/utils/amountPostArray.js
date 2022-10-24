export default function (post) {
    let a = [];
    for (var i = 1; i < post.amount + 1; i++) {
        a.push(i);
    }
    return a;
}