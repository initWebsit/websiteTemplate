export default function classAdapt(name) {
    if (!$_.isString(name)) return "";

    let names = name.split('-');

    if (names.length !== 2) return name;

    let newName = names[0];
    if ($q.is.mobile) newName += '-m';
    if ($q.is.desktop) newName += '-d';
    newName += '-' + names[1];
    return newName;
}