let uuid = 1000000;

export default function getUID() {
  const id = uuid.toString(36);

  uuid += 1;

  return id;
}
