package java8;

import java.util.*;
import java.util.stream.Collectors;

public class EmployeeUtill {
        List<Employee> employeeList = new ArrayList<Employee>();

    EmployeeUtill() {
        employeeList.add(new Employee(111, "Jiya Brein", 32, "Female", "HR", 2011, 25000.0));
        employeeList.add(new Employee(122, "Paul Niksui", 25, "Male", "Sales And Marketing", 2015, 13500.0));
        employeeList.add(new Employee(133, "Martin Theron", 29, "Male", "Infrastructure", 2012, 18000.0));
        employeeList.add(new Employee(144, "Murali Gowda", 28, "Male", "Product Development", 2014, 32500.0));
        employeeList.add(new Employee(155, "Nima Roy", 27, "Female", "HR", 2013, 22700.0));
        employeeList.add(new Employee(166, "Iqbal Hussain", 43, "Male", "Security And Transport", 2016, 10500.0));
        employeeList.add(new Employee(177, "Manu Sharma", 35, "Male", "Account And Finance", 2010, 27000.0));
        employeeList.add(new Employee(188, "Wang Liu", 31, "Male", "Product Development", 2015, 34500.0));
        employeeList.add(new Employee(199, "Amelia Zoe", 24, "Female", "Sales And Marketing", 2016, 11500.0));
        employeeList.add(new Employee(200, "Jaden Dough", 38, "Male", "Security And Transport", 2015, 11000.5));
        employeeList.add(new Employee(211, "Jasna Kaur", 27, "Female", "Infrastructure", 2014, 15700.0));
        employeeList.add(new Employee(222, "Nitin Joshi", 25, "Male", "Product Development", 2016, 28200.0));
        employeeList.add(new Employee(233, "Jyothi Reddy", 27, "Female", "Account And Finance", 2013, 21300.0));
        employeeList.add(new Employee(244, "Nicolus Den", 24, "Male", "Sales And Marketing", 2017, 10700.5));
        employeeList.add(new Employee(255, "Ali Baig", 23, "Male", "Infrastructure", 2018, 12700.0));
        employeeList.add(new Employee(266, "Sanvi Pandey", 26, "Female", "Product Development", 2015, 28900.0));
        employeeList.add(new Employee(277, "Anuj Chettiar", 31, "Male", "Product Development", 2012, 35700.0));
    }


    public static void main(String[] args) {
        EmployeeUtill employeeUtill = new EmployeeUtill();
        //How many male and female employees are there in the organization?
        Map<String, Long> collect = employeeUtill.employeeList.stream().collect(Collectors.groupingBy(Employee::getGender, Collectors.counting()));

//        Print the name of all departments in the organization?
        employeeUtill.employeeList.stream().map(a -> a.getDepartment()).distinct().forEach(System.out::println);

//        What is the average age of male and female employees?
        Map<String, Double> collect1 = employeeUtill.employeeList.stream().collect(Collectors.groupingBy(Employee::getGender, Collectors.averagingInt(Employee::getAge)));

//        Get the details of highest paid employee in the organization?
        Optional<Employee> max = employeeUtill.employeeList.stream().max(Comparator.comparing(Employee::getSalary));
        System.out.println(max.get());

//        Get the names of all employees who have joined after 2015?
        List<Employee> list = employeeUtill.employeeList.stream().filter(e -> e.getYearOfJoining() > 2015).toList();
        System.out.println(list);

//        Count the number of employees in each department?
        Map<String, Long> collect2 = employeeUtill.employeeList.stream().collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));

//        What is the average salary of each department?
        Map<String, Double> collect3 = employeeUtill.employeeList.stream().collect(Collectors.groupingBy(Employee::getDepartment, Collectors.averagingDouble(Employee::getSalary)));

//        Get the details of youngest male employee in the product development department?
        Optional<Employee> max1 = employeeUtill.employeeList.stream().filter(e -> e.getDepartment().equalsIgnoreCase("Product Development") && e.getGender().equalsIgnoreCase("Male"))
                .max(Comparator.comparing(Employee::getYearOfJoining));
        System.out.println("Youngest male employee"+max1.get());

//        Who has the most working experience in the organization?
        Optional<Employee> max2 = employeeUtill.employeeList.stream().sorted(Comparator.comparing(Employee::getYearOfJoining)).findFirst();
        System.out.println("most working experience: "+max2.get());

//        How many male and female employees are there in the sales and marketing team?
        Map<String, Long> collect4 = employeeUtill.employeeList.stream().filter(e -> e.getDepartment().equalsIgnoreCase("Sales And Marketing"))
                .collect(Collectors.groupingBy(Employee::getGender, Collectors.counting()));

        System.out.println(collect4);

//        List down the names of all employees in each department?
        Map<String, List<Employee>> collect5 = employeeUtill.employeeList.stream().collect(Collectors.groupingBy(Employee::getDepartment));

//        Separate the employees who are younger or equal to 25 years from those employees who are older than 25 years.
        Map<Boolean, List<Employee>> collect6 = employeeUtill.employeeList.stream().collect(Collectors.partitioningBy(e -> e.getAge() <= 25));
        System.out.println(collect6);
        List<Employee> list1 = employeeUtill.employeeList.stream().sorted((emp1, emp2) -> emp1.getName().compareTo(emp2.getName())).toList();
        System.out.println(list1);
    }




}
