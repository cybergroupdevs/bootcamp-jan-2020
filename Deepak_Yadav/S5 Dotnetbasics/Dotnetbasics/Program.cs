using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Dotnetbasics
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("input 1 for read");
            Console.WriteLine("input 2 for insert");
            Console.WriteLine("input 3 for update");
            Console.WriteLine("input 4 for delete");
            Console.WriteLine("\n************************************");
            string temp = Console.ReadLine();
            int caseSwitch = Convert.ToInt32(temp);

            switch (caseSwitch)
            {
                case 1:
                    DeepakRead.read();
                    break;
                case 2:
                    Console.WriteLine("Inserted");
                    Insert.insert();
                    break;
                case 3:
                    Console.WriteLine("Updated");
                    Update.update();
                    break;
                case 4:
                    Console.WriteLine("Delete");
                    Delete.delete();
                    break;
                default:
                    Console.WriteLine("Default case");
                    break;
            }
        }
    }
}