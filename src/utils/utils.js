 // Aqui são formatadas as placas
export const formatPlaca = (placa) => {
    const formattedPlaca = placa.replace(/(\w{3})(\w{4})/, '$1-$2');
    return formattedPlaca;
  };
 // Aqui são formatadas as datas
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const formattedDate = `${day}/${month}/${year}`
    
    return formattedDate;
  };
// Aqui são formatados os KM
  export const formatKm = (km) => {
    const formattedKm = Number(km).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return formattedKm;
  };