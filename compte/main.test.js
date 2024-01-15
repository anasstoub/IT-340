// main.test.js
const { getBalance } = require('./bank');
const bankDAO = require('./bankDAO');

// Stub pour remplacer la fonction retrieveBalance par une fonction vide
jest.mock('./bankDAO', () => ({
  retrieveBalance: jest.fn((accountID)=> 200),
}));

describe('getBalance', () => {
  it('should call retrieveBalance without executing it', () => {
    // Appeler la fonction getBalance
    getBalance();
    // Vérifier que la fonction retrieveBalance a été appelée
    expect(bankDAO.retrieveBalance).toHaveBeenCalled();

    // Vérifier que la fonction retrieveBalance n'a pas été exécutée (le log ne doit pas s'afficher)hh
    // expect(bankDAO.retrieveBalance).not.toHaveBeenCalledWith();
  });
  it('should call retrieveBalance and execute it', () => {
    // Appeler la fonction getBalance
    getBalance(1);
    // Vérifier que la fonction retrieveBalance a été appelée
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(1);

    // Vérifier que la fonction retrieveBalance a été exécutée (le log doit s'afficher)
    // expect(bankDAO.retrieveBalance).toHaveBeenCalledWith();
  });
  it('should return the balance', () => {
    // Appeler la fonction getBalance
    const balance = getBalance(1);
    // Vérifier que la fonction retrieveBalance a été appelée
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(1);

    // Vérifier que la fonction retrieveBalance a été exécutée (le log doit s'afficher)
    // expect(bankDAO.retrieveBalance).toHaveBeenCalledWith();

    // Vérifier que la fonction getBalance a retourné la bonne valeur
    expect(balance).toBe(200);
  });
});

