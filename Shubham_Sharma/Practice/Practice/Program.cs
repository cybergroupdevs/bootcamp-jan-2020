using System;
using System.Data.SqlClient;
using System.Text;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            connection c = new connection();
            Console.WriteLine("\nQuery data example:");
            Console.WriteLine("=========================================\n");
            Console.WriteLine("Choose Your Option, Type ");
            Console.WriteLine("1. Inserting new ROW ");
            Console.WriteLine("2. Updating Name ");
            Console.WriteLine("3. Updating Age ");
            Console.WriteLine("4. Deleting the ROW");
            Console.WriteLine("5. Retrieve All Data");
            Console.WriteLine("6. Retrieving a row");
            string input = Console.ReadLine();
           
            if (string.Equals(input, "1"))
            {
                Console.WriteLine("Enter your id, name and age respectively");
                int id = Convert.ToInt32(Console.ReadLine());
                string name = Console.ReadLine();
                int age = Convert.ToInt32(Console.ReadLine());
                insert.doInsert(id, name, age);
            }
            if (string.Equals(input, "2"))
            {
                Console.WriteLine("Enter your id and name respectively");
                int id = Convert.ToInt32(Console.ReadLine());
                string name = Console.ReadLine();
                update.updateName(id, name);     
            }
            if (string.Equals(input, "3"))
            {
                Console.WriteLine("Enter your id and age respectively");
                int id = Convert.ToInt32(Console.ReadLine());
                int age = Convert.ToInt32(Console.ReadLine());
                update.updateAge(id, age);
            }
            if (string.Equals(input, "4"))
            {
                Console.WriteLine("Enter the id ");
                int id = Convert.ToInt32(Console.ReadLine());
                delete.deleteRow(id);
            }
            if (string.Equals(input, "5"))
            {
                retrieve.getAll();
            }
            if (string.Equals(input, "6"))
            {
                Console.WriteLine("Enter the id");
                int id = Convert.ToInt32(Console.ReadLine());
                retrieve.getOne(id);
            }
            else
            { 
                Console.ReadLine();
            }
            //StringBuilder sb = new StringBuilder();
            //sb.Append("INSERT INTO [dbo].[cSharpTask] VALUES ");
            //sb.Append("SELECT [ID],[Description],[Path] FROM [dbo].[dummy_config] ");
            //sb.Append("FROM [SalesLT].[ProductCategory] pc ");
            //sb.Append("JOIN [SalesLT].[Product] p ");
            //sb.Append("ON pc.productcategoryid = p.productcategoryid;");
            //String sql = sb.ToString();
            /*using (SqlCommand command = new SqlCommand(sql, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetString(2));
                    }
                }
            }*/

        }
    }
}
