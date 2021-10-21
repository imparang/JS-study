export default function (data, typeName) {
  // [object Datatype]
  return Object.prototype.toString.call(data).slice(8, -1) === typeName;
}
