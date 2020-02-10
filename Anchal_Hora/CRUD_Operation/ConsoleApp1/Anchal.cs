using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Dotnetsession
{
    class Anchal
    {
        static void Main(string[] args)
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=CYG366\\SQLEXPRESS;Initial Catalog=task;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    string anchal = Console.ReadLine();
                    int caseSwitch = Convert.ToInt32(anchal);

                    switch (caseSwitch)
                    {

                        case 1:
                            Update.updateFunc();
                            break;
                        case 2:
                            Insert.insertFunc();
                            break;
                        case 3:
                            Delete.deleteFunc();
                            break;
                        case 4:
                            ReadData.readFunc();
                            break;
                        default:
                            Console.WriteLine("Default case");
                            break;
                    }

                    String sql = sb.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {

                                Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetString(2));

                            }
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.WriteLine("\nDone. Press enter.");
            Console.ReadLine();
        }
    }
}
    

