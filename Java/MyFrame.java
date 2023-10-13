import javax.swing.BorderFactory;
import javax.swing.border.Border;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.Color;
import java.awt.Font;

public class MyFrame {
  {
    JFrame frame = new JFrame();

    frame.setTitle("Figs");
    frame.setSize(420,420);
    frame.setVisible(true);
    frame.getContentPane().setBackground(new Color(122,50,250));
    
    ImageIcon image = new ImageIcon("unnamed.png");
    Border border = BorderFactory.createLineBorder(Color.green, 3, false);
  
    JLabel label = new JLabel();
    label.setText("Bro, do you even code?");
    label.setIcon(image);
    frame.add(label);
    label.setHorizontalTextPosition(JLabel.CENTER);
    label.setVerticalTextPosition(JLabel.TOP);
    label.setForeground(new Color(0x00FF00));
    label.setFont(new Font("MV Boli", Font.PLAIN, 20));;
    label.setIconTextGap(-10);
    label.setBorder(border);
    label.setVerticalAlignment(JLabel.CENTER);
    label.setHorizontalAlignment(JLabel.CENTER);

    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
}