class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        System.out.println("The CLASS IS Animal.");
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
        System.out.println("The CLASS IS dog.");

    }

    public void bark() {
        System.out.println("The dog is barking.");
    }

    public String getBreed() {
        return breed;
    }
}

public class Main {
    public static void main(String[] args) {
        // Create a Dog object
        Dog myDog = new Dog("Max", 3, "Golden Retriever");

        // Call methods from the Dog class
        // myDog.eat();
        // myDog.sleep();
        // myDog.bark();

        // // Access properties from the Dog class
        // System.out.println("Name: " + myDog.getName());
        // System.out.println("Age: " + myDog.getAge());
        // System.out.println("Breed: " + myDog.getBreed());
    }
}