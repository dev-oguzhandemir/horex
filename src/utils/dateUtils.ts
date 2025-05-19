/**
 * Formats a date string in a more readable format
 * @param dateString Date string in format 'YYYY-MM-DD'
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', options);
}; 