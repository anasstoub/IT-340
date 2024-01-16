const {transferMoney} = require("./bank");
const bankTransfer = require("./bankTransfer");
const bankDAO = require("./bankDAO");


jest.mock("./bankTransfer", () => ({
    transfer: jest.fn(),
}));

jest.mock("./bankDAO", () => ({
    debitAccount: jest.fn(),
}));


describe("transferMoney", () => {
    afterEach(() => {
        bankTransfer.transfer.mockClear();
        bankDAO.debitAccount.mockClear();
    });
    it("should call transfer if promise is resolved", () => {
        bankTransfer.transfer.mockResolvedValueOnce(1);
        transferMoney(1, 200);
        expect(bankTransfer.transfer).toHaveBeenCalledWith(1, 200);
    });
    it("should call debitAccount when promise is solved", async() => {
        bankTransfer.transfer.mockResolvedValueOnce(Promise.resolve());
        await transferMoney(1, 200);
        expect(bankDAO.debitAccount).toHaveBeenCalledWith(1, 200);
    });
    it("should no call debitAccount when promise is rejected", async() => {
        bankTransfer.transfer.mockResolvedValueOnce(Promise.reject(1));
        await transferMoney(1, 200);
        expect(bankDAO.debitAccount).not.toHaveBeenCalled();
    });
    
});




