using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Delete
    {
        public static string deleteData()
        {
            Console.WriteLine("\nDelete data example:");
            Console.WriteLine("=========================================\n");

            StringBuilder sb = new StringBuilder();
            sb.Append("DELETE FROM [dbo].[tblOffice] WHERE path='intern.txt' ");

            Console.ReadLine();
            return sb.ToString();
        }
    }
}
