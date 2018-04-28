package project.restaurant.gui;

import javax.swing.*;

public class main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("LogIn");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500,500);
        frame.setContentPane(new EntryPage().getBrEntryPage());
        frame.setVisible(true);
    }
}
