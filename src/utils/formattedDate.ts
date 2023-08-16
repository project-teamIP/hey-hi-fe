// createdAt: '2023-08-10T10:40:20.275486' -> 2023.08.10 10:40
export function formatDateTime(dateTime: string): string {
  const createdAtDate = new Date(dateTime);

  const year = createdAtDate.getFullYear();
  const month = String(createdAtDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdAtDate.getDate()).padStart(2, "0");
  const hours = String(createdAtDate.getHours()).padStart(2, "0");
  const minutes = String(createdAtDate.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}
