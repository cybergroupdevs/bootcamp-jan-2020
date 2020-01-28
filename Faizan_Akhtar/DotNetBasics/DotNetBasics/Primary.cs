using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetBasics
{
    class Primary
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\nPress 1 For Read");
            Console.WriteLine("Press 2 For Insert");
            Console.WriteLine("Press 3 For Update");
            Console.WriteLine("Press 4 For Delete");
            Console.WriteLine("\n^^^^^^^^^^^^^^^^^^^^\n");

            string temp = Console.ReadLine();
            int caseSwitch = Convert.ToInt32(temp);
            switch (caseSwitch)
            {
                case 1:
                    Console.WriteLine("READ");
                    Read.DoRead();
                    break;
                case 2:
                    Console.WriteLine("INSERT");
                    Insert.DoInsert();
                    break;
                case 3:
                    Console.WriteLine("INSERT");
                    Update.DoUpdate();
                    break;
                case 4:
                    Console.WriteLine("INSERT");
                    Delete.DoDelete();
                    break;
                default:
                    Console.WriteLine("Default case");
                    break;
            }
        }
    }
}
