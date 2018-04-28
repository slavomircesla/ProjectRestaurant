package project.restaurant.gui;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AccountManager {
    private JLabel userName;
    private JTextField txtSearch;
    private JButton btnSearch;
    private JPanel MenuPanel;
    private JButton btnTables;
    private JButton btnMakeOrder;
    private JButton logOutButton;
    private JButton btnTransfer;
    private JButton btnBill;
    private JButton btnAddEmployee;
    private JPanel bgAccountManager;
    private JButton btnSearch3;


    public JPanel getBgAccountManager() {
        return bgAccountManager;
    }

    public JLabel getUserName() {
        return userName;
    }

    public JTextField getTxtSearch() {
        return txtSearch;
    }

    public JButton getBtnSearch() {
        return btnSearch;
    }

    public JPanel getMenuPanel() {
        return MenuPanel;
    }

    public JButton getBtnTables() {
        return btnTables;
    }

    public JButton getBtnMakeOrder() {
        return btnMakeOrder;
    }

    public JButton getLogOutButton() {
        return logOutButton;
    }

    public JButton getBtnTransfer() {
        return btnTransfer;
    }

    public JButton getBtnBill() {
        return btnBill;
    }

    public JButton getBtnAddEmployee() {
        return btnAddEmployee;
    }

    public AccountManager() {
        logOutButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
            }
        });
    }
}
