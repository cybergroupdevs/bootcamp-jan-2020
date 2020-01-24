using System;
using System.Data.SqlClient;
using System.Text;

namespace DotNetSession1
{
    class Class1
    {
        static void Main(string[] args)
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=CYG317\\SQLEXPRESS;Initial Catalog=practice1;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    int caseSwitch = 1;

                    switch (caseSwitch)
                    {
                        case 1:
                            sb.Append("SELECT [id],[first_name],[last_name] FROM [dbo].[vs_task] ");
                            break;
                        case 2:
                            sb.Append("UPDATE [dbo].[vs_task] SET first_name='Nayannika' where id=2");
                            break;
                        case 3:
                            sb.Append("DELETE from [dbo].[vs_task] where id=3");
                            break;
                        case 4:
                            sb.Append("INSERT into [dbo].[vs_task](first_name, last_name) values('chetna','mongmaw')");
                            break;
                        case 5:
                            sb.Append("SELECT [id],[first_name],[last_name] FROM [dbo].[vs_task] ");
                            break;
                        case 6:
                            class2.abc();
                            break;
                        case 7:
                            class3.def();
                            break;
                        case 8:
                            class4.ghi();
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

                                Console.WriteLine("{0} {1} {2}", reader.GetInt32(0),reader.GetString(1), reader.GetString(2));

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
