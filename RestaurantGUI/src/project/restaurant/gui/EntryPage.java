package project.restaurant.gui;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EntryPage {
    private JComboBox txtLogin;
    private JPasswordField txtPassword;
    private JPanel brEntryPage;
    private JButton btnLogin;
    private JButton btnLogIn;

    public EntryPage() {
        btnLogin.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (txtLogin.getSelectedItem() == "waiter"){
                    openForm(1);
                }else if (txtLogin.getSelectedItem() == "seupervisor"){
                    openForm(2);
                }else if (txtLogin.getSelectedItem() == "manager"){
                    openForm(3);
                }else{
                    System.out.println("Choose a user!");
                }
            }
        });
    }

    private void openForm(int i) {
        switch (i){
            case 1: JFrame frame1 = new JFrame("LogIn");
                frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame1.setSize(500,500);
                frame1.setContentPane(new AccountWaiter().getBgAccountWaiter());
                frame1.setVisible(true);
                break;
            case 2: JFrame frame2 = new JFrame("LogIn");
                frame2.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame2.setSize(500,500);
                frame2.setContentPane(new AccountSupervisor().getBgAccountSupervisor());
                frame2.setVisible(true);
                break;
            case 3: JFrame frame3 = new JFrame("LogIn");
                frame3.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame3.setSize(500,500);
                frame3.setContentPane(new AccountManager().getBgAccountManager());
                frame3.setVisible(true);
                break;
        }
    }

    public JPanel getBrEntryPage() {
        return brEntryPage;
    }


}
