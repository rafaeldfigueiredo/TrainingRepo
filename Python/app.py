class Dog:
  def __init__(self,name:str,color:str):
    self.name = name
    self.color = color
  def getName(self):
    print(self.name)
  def setName(self,newName:str):
    self.name = newName