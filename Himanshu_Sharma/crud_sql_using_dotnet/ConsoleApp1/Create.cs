using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Create
    {
        public static string createToDb()
        {
            Console.WriteLine("\nWrite data example:");
            Console.WriteLine("=========================================\n");

            StringBuilder sb = new StringBuilder();
            sb.Append("INSERT INTO [dbo].[tblOffice] (id, description, path) VALUES(1, 'Intern', 'intern.txt')");
           
            

            Console.ReadLine();
            return sb.ToString();
        }
    }
}
