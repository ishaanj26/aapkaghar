export const formatNumber = (value)=> {

    const numberToFormat = typeof value === 'string' 
      ? parseFloat(value.replace(/,/g, ''))
      : value;

    if (isNaN(numberToFormat)) return '0';
    

    return new Intl.NumberFormat('en-IN').format(numberToFormat);
  };

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};