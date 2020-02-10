using System;
using System.Data.SqlClient;
using System.Text;

namespace demoproject
{
    class Program
    {
        static void Main(string[] args)
        { 
         try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
        builder.ConnectionString = "Data Source=localhost;Initial Catalog=abha;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");
                    Console.WriteLine("\nEnter your choice");
                    Console.WriteLine("\n1. UPDATE");
                    Console.WriteLine("\n2. DELETE");
                    Console.WriteLine("\n3. INSERT");
                    Console.WriteLine("\n4. RETRIEVE");
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    int caseSwitch = Convert.ToInt32(Console.ReadLine()); 
                    switch (caseSwitch)
                    {
                        case 1:
                            Update.updatedata();
                            //sb.Append("SELECT [PID],[pname] FROM [dbo].[practicedb] ");
                            break;
                        case 2:
                            Delete.deletedata();
                           // sb.Append("UPDATE [dbo].[practicedb] SET pname='Nayannika' where PID=2");
                            break;
                        case 3:
                            Insert.insertdata();
                            //sb.Append("DELETE from [dbo].[practicedb] where PID=3");
                            break;
                        case 4:
                            Read.readdata();
                            //sb.Append("INSERT into [dbo].[practicedb](PID, pname) values(105,'chetna')");
                            break;
                      
                        default:
                            Console.WriteLine("Default case");
                            break;
                    }

                   /* String sql = sb.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {

                                Console.WriteLine("{0} {1} {2}", reader.GetInt32(0),reader.GetString(1), reader.GetString(2));

                            }
                        }
                    }*/
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