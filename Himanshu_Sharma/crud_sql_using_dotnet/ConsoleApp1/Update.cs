using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Update
    {
        public static string updateData()
        {
            Console.WriteLine("\nUpdate data example:");
            Console.WriteLine("=========================================\n");

            StringBuilder sb = new StringBuilder();
            sb.Append("UPDATE [dbo].[tblOffice] SET id = 100 WHERE id = 1 ");

            Console.ReadLine();
            return sb.ToString();
        }
    }
}
