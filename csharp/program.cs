using System;
using System.Collections.Generic;

// ====================== 1. BASE CLASS ======================
public abstract class Person
{
    public int RecordID { get; private set; }
    public string FullName { get; private set; }
    public int Age { get; private set; }
    public string Gender { get; private set; }

    protected Person(int id, string name, int age, string gender)
    {
        RecordID = id;
        FullName = name;
        Age = age;
        Gender = gender;
    }

    public abstract double GetCharges();

    public virtual void ShowInfo()
    {
        Console.WriteLine($"ID: {RecordID}, Name: {FullName}, Age: {Age}, Gender: {Gender}");
    }
}

// ====================== 2. PATIENT TYPES ======================
public class HospitalIPD : Person
{
    public double StayCharges { get; private set; }

    public HospitalIPD(int id, string name, int age, string gender, double stayCharges = 1500)
        : base(id, name, age, gender)
    {
        StayCharges = stayCharges;
    }

    public override double GetCharges() => StayCharges;

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Type: IPD, Stay Charges: {StayCharges:C}");
    }
}

public class HospitalOPD : Person
{
    public double VisitFee { get; private set; }

    public HospitalOPD(int id, string name, int age, string gender, double visitFee = 500)
        : base(id, name, age, gender)
    {
        VisitFee = visitFee;
    }

    public override double GetCharges() => VisitFee;

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Type: OPD, Consultation Fee: {VisitFee:C}");
    }
}

public class HospitalEmergency : Person
{
    public double EmergencyFee { get; private set; }

    public HospitalEmergency(int id, string name, int age, string gender, double emergencyFee = 2000)
        : base(id, name, age, gender)
    {
        EmergencyFee = emergencyFee;
    }

    public override double GetCharges() => EmergencyFee;

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Type: Emergency, Emergency Fee: {EmergencyFee:C}");
    }
}

// ====================== 3. BILLING STRATEGY ======================
public delegate double BillingFunction(Person patient);

public class ChargeCalculator
{
    public double NormalBilling(Person patient) => patient.GetCharges() * 1.10;
    public double EmergencyBilling(Person patient) => patient.GetCharges() * 1.20;
    public double InsuranceBilling(Person patient) => patient.GetCharges() * 0.70;
}

// ====================== 4. HOSPITAL SYSTEM ======================
public class HospitalManager
{
    public event Action<Person> PatientAdded;
    public event Action<Person, double> BillDone;

    private List<Person> patientList = new List<Person>();

    public void AddPatient(Person patient)
    {
        patientList.Add(patient);
        Console.WriteLine($"\n {patient.FullName} has been added to the system.");
        PatientAdded?.Invoke(patient);
    }

    public void CreateBill(Person patient, BillingFunction function)
    {
        double total = function(patient);
        Console.WriteLine($"💵 Bill for {patient.FullName}: {total:C}");
        BillDone?.Invoke(patient, total);
    }

    public void ShowAll()
    {
        if (patientList.Count == 0)
        {
            Console.WriteLine("\nNo patients in the system yet.");
            return;
        }

        Console.WriteLine("\n--- Registered Patients ---");
        foreach (var p in patientList)
        {
            p.ShowInfo();
            Console.WriteLine("----------------------------");
        }
    }

    public Person FindPatient(int id)
    {
        return patientList.Find(p => p.RecordID == id);
    }
}

// ====================== 5. DEPARTMENTS ======================
public class LabDept
{
    public void NotifyAdmission(Person patient) => Console.WriteLine($"Lab Dept: Tests prepared for {patient.FullName}");
    public void NotifyBill(Person patient, double amount) => Console.WriteLine($"Lab Dept: Bill recorded for {patient.FullName}: {amount:C}");
}

public class PharmacyDept
{
    public void NotifyAdmission(Person patient) => Console.WriteLine($"Pharmacy Dept: Medicines ready for {patient.FullName}");
    public void NotifyBill(Person patient, double amount) => Console.WriteLine($"Pharmacy Dept: Bill recorded for {patient.FullName}: {amount:C}");
}

public class AccountsDepartment
{
    public void NotifyBill(Person patient, double amount) => Console.WriteLine($"Accounts: Bill processed for {patient.FullName} = {amount:C}");
}

// ====================== 6. MAIN MENU ======================
class HospitalConsoleApp
{
    static void Main()
    {
        HospitalManager manager = new HospitalManager();
        ChargeCalculator calculator = new ChargeCalculator();

        LabDept lab = new LabDept();
        PharmacyDept pharmacy = new PharmacyDept();
        AccountsDepartment accounts = new AccountsDepartment();

        manager.PatientAdded += lab.NotifyAdmission;
        manager.PatientAdded += pharmacy.NotifyAdmission;

        manager.BillDone += lab.NotifyBill;
        manager.BillDone += pharmacy.NotifyBill;
        manager.BillDone += accounts.NotifyBill;

        Console.WriteLine("=== Welcome to Hospital Management Console System ===");

        int counter = 1;

        while (true)
        {
            Console.WriteLine("\n--- MENU ---");
            Console.WriteLine("1. Add New Patient");
            Console.WriteLine("2. Display All Patients");
            Console.WriteLine("3. Generate Bill for Patient");
            Console.WriteLine("4. Exit");
            Console.Write("Choose an option: ");
            int option = int.Parse(Console.ReadLine());

            switch (option)
            {
                case 1:
                    Console.WriteLine($"\n--- Enter details for Patient {counter} ---");
                    Console.Write("Full Name: ");
                    string name = Console.ReadLine();
                    Console.Write("Age: ");
                    int age = int.Parse(Console.ReadLine());
                    Console.Write("Gender: ");
                    string gender = Console.ReadLine();

                    Console.WriteLine("Select type: 1. OPD  2. IPD  3. Emergency");
                    int type = int.Parse(Console.ReadLine());

                    Person patient = type switch
                    {
                        1 => new HospitalOPD(counter, name, age, gender),
                        2 => new HospitalIPD(counter, name, age, gender),
                        3 => new HospitalEmergency(counter, name, age, gender),
                        _ => throw new Exception("Invalid type!")
                    };

                    manager.AddPatient(patient);
                    counter++;
                    break;

                case 2:
                    manager.ShowAll();
                    break;

                case 3:
                    Console.Write("Enter Patient ID for billing: ");
                    int id = int.Parse(Console.ReadLine());
                    Person selected = manager.FindPatient(id);

                    if (selected == null)
                    {
                        Console.WriteLine("Patient not found!");
                        break;
                    }

                    Console.WriteLine("Select billing: 1. Normal  2. Emergency  3. Insurance");
                    int billOption = int.Parse(Console.ReadLine());
                    BillingFunction method = billOption switch
                    {
                        1 => calculator.NormalBilling,
                        2 => calculator.EmergencyBilling,
                        3 => calculator.InsuranceBilling,
                        _ => calculator.NormalBilling
                    };

                    manager.CreateBill(selected, method);
                    break;

                case 4:
                    Console.WriteLine("Exiting system. Goodbye!");
                    return;

                default:
                    Console.WriteLine("Invalid option! Try again.");
                    break;
            }
        }
    }
}