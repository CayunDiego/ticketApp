
export const getUserStorage = () => {
  return {
    agent: localStorage.getItem('agente'),
    desk: localStorage.getItem('escritorio')
  }

}