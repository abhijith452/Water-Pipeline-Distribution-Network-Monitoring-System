#include <SoftwareSerial.h>

SoftwareSerial s(5,6);
char value_1[10] ="111" ;
char value_2[10]  ="2.6" ;
char value_3[10]  ="3.6" ;
void setup() 
{

  Serial.begin(9600);
s.begin(9600);


}

void loop()
{






send_to_nodemcu ();
  
}


void send_to_nodemcu ()
{
  int a = s.read();
  if(a==5)
  {
s.write(value_1,10);
  }
  else if(a==6)
  {
s.write(value_2,10);

  }
  else if(a==7)
  {
s.write(value_3,10);

  Serial.println("MESSAGE SENT");
  }
  else
  {
  
  Serial.println("No msg");
  }
  
}

