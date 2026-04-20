export default function formatToMonthYear(mysqlTimestamp) {
  if (!mysqlTimestamp) return '';

  const isoString = mysqlTimestamp.replace(' ', 'T');
  const date = new Date(isoString);

  if (isNaN(date.getTime())) return '';

  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}
