using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Read
    {
        public static string readFromDb() {
            Console.WriteLine("\nRead data example:");
            Console.WriteLine("=========================================\n");

            StringBuilder sb = new StringBuilder();
            sb.Append("SELECT [id],[description] FROM [dbo].[tblOffice]");

            Console.ReadLine();
            return sb.ToString();
        }
    }
}
